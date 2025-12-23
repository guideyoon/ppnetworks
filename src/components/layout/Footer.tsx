import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-purple-900/20 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-white">PEOPLE</span>
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">NETWORKS</span>
            </h3>
            <p className="text-sm text-slate-400">
              소상공인을 위한 전문 홈페이지 제작 서비스
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/service"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  서비스 안내
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  회사소개
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">연락처</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:"
                  className="hover:text-primary transition-colors"
                >
                  전화: (문의 필요)
                </a>
              </li>
              <li>
                <a
                  href="https://open.kakao.com/o/sHtN7Mzh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  카카오톡: 1:1 상담하기
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">법적 정보</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 피플네트웍스. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

