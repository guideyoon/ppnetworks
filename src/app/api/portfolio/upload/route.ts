import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const portfolioId = formData.get("portfolioId") as string;

    if (!file) {
      return NextResponse.json(
        { error: "파일이 제공되지 않았습니다." },
        { status: 400 }
      );
    }

    // 파일 타입 확인
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "이미지 파일만 업로드 가능합니다." },
        { status: 400 }
      );
    }

    // 파일 크기 확인 (5MB 제한)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "파일 크기는 5MB 이하여야 합니다." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 파일명 생성 (포트폴리오 ID 또는 원본 파일명 사용)
    const fileExtension = file.name.split(".").pop();
    const fileName = portfolioId
      ? `portfolio-${portfolioId}-thumbnail.${fileExtension}`
      : `portfolio-${Date.now()}.${fileExtension}`;

    // public 폴더에 저장
    const publicDir = join(process.cwd(), "public");
    const filePath = join(publicDir, fileName);

    // public 폴더가 없으면 생성
    if (!existsSync(publicDir)) {
      await mkdir(publicDir, { recursive: true });
    }

    await writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      fileName: fileName,
      url: `/${fileName}`,
    });
  } catch (error) {
    console.error("파일 업로드 오류:", error);
    return NextResponse.json(
      { error: "파일 업로드 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

