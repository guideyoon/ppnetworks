"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Upload, X, Check } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  site_url: string;
  tags: string[];
}

export default function AdminPortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 미리보기 생성
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fileInput = formData.get("file") as File;

    if (!fileInput || !fileInput.name) {
      alert("파일을 선택해주세요.");
      return;
    }

    setUploading(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", fileInput);
      if (selectedItem) {
        uploadFormData.append("portfolioId", selectedItem.id.toString());
      }

      const response = await fetch("/api/portfolio/upload", {
        method: "POST",
        body: uploadFormData,
      });

      const data = await response.json();

      if (response.ok) {
        setUploadedFile(data.url);
        alert(`업로드 성공! 파일 경로: ${data.url}`);
        // 포트폴리오 데이터 업데이트를 위한 코드 추가 가능
        // 예: 포트폴리오 데이터베이스나 JSON 파일 업데이트
      } else {
        alert(`업로드 실패: ${data.error}`);
      }
    } catch (error) {
      console.error("업로드 오류:", error);
      alert("업로드 중 오류가 발생했습니다.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollAnimation direction="fade">
          <Card className="border-2 border-slate-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-900">
                포트폴리오 썸네일 업로드
              </CardTitle>
              <CardDescription className="text-lg">
                포트폴리오 항목의 썸네일 이미지를 업로드하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="portfolio-id" className="text-base font-semibold">
                    포트폴리오 ID (선택사항)
                  </Label>
                  <Input
                    id="portfolio-id"
                    name="portfolioId"
                    type="text"
                    placeholder="예: 1, 2, 3..."
                    className="text-base"
                  />
                  <p className="text-sm text-slate-500">
                    포트폴리오 ID를 입력하면 파일명에 포함됩니다. (예: portfolio-1-thumbnail.jpg)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file" className="text-base font-semibold">
                    썸네일 이미지 선택
                  </Label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 hover:border-purple-400 transition-colors">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="file"
                      className="flex flex-col items-center justify-center cursor-pointer space-y-4"
                    >
                      <div className="p-4 bg-purple-100 rounded-full">
                        <Upload className="h-8 w-8 text-purple-600" />
                      </div>
                      <div className="text-center">
                        <p className="text-base font-medium text-slate-700">
                          클릭하여 이미지 파일 선택
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          PNG, JPG, JPEG 형식, 최대 5MB
                        </p>
                      </div>
                    </label>
                  </div>

                  {preview && (
                    <div className="mt-4 relative">
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-slate-300">
                        <img
                          src={preview}
                          alt="미리보기"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPreview(null);
                            const fileInput = document.getElementById("file") as HTMLInputElement;
                            if (fileInput) fileInput.value = "";
                          }}
                          className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {uploadedFile && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-700">
                      <Check className="h-5 w-5" />
                      <div>
                        <p className="font-semibold">업로드 완료!</p>
                        <p className="text-sm mt-1">
                          파일 경로: <code className="bg-white px-2 py-1 rounded">{uploadedFile}</code>
                        </p>
                        <p className="text-sm mt-2 text-slate-600">
                          포트폴리오 페이지에서 이 경로를 사용하세요.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={uploading || !preview}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-lg py-6"
                >
                  {uploading ? "업로드 중..." : "업로드"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>

        <ScrollAnimation direction="fade" delay={100}>
          <Card className="mt-8 border-2 border-slate-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">
                사용 방법
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <div className="space-y-2">
                <p className="font-semibold">1. 이미지 파일 선택</p>
                <p className="text-sm">
                  썸네일로 사용할 이미지 파일을 선택합니다. (PNG, JPG, JPEG 형식)
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">2. 포트폴리오 ID 입력 (선택사항)</p>
                <p className="text-sm">
                  포트폴리오 ID를 입력하면 파일명에 포함되어 관리가 편리합니다.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">3. 업로드 버튼 클릭</p>
                <p className="text-sm">
                  업로드가 완료되면 파일 경로가 표시됩니다.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">4. 포트폴리오 코드에 경로 적용</p>
                <p className="text-sm">
                  <code className="bg-slate-100 px-2 py-1 rounded text-sm">
                    src/app/portfolio/page.tsx
                  </code>
                  파일에서 해당 포트폴리오 항목의 thumbnail 값을 업로드된 파일 경로로 수정하세요.
                </p>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  );
}

