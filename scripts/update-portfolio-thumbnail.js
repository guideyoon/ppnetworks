const fs = require('fs');
const path = require('path');

/**
 * 포트폴리오 썸네일 경로를 자동으로 업데이트하는 스크립트
 * 
 * 사용법:
 * node scripts/update-portfolio-thumbnail.js <포트폴리오ID> <파일명>
 * 
 * 예시:
 * node scripts/update-portfolio-thumbnail.js 1 cafe-thumbnail.jpg
 * node scripts/update-portfolio-thumbnail.js 2 salon-new.jpg
 */

const portfolioPagePath = path.join(__dirname, '../src/app/portfolio/page.tsx');

function updatePortfolioThumbnail(portfolioId, fileName) {
  try {
    // 파일명에 / 접두사 추가
    const thumbnailPath = fileName.startsWith('/') ? fileName : `/${fileName}`;
    
    // 포트폴리오 페이지 파일 읽기
    let content = fs.readFileSync(portfolioPagePath, 'utf8');
    
    // 포트폴리오 ID로 해당 항목 찾기
    const idPattern = new RegExp(`(id:\\s*${portfolioId},[\\s\\S]*?thumbnail:\\s*")[^"]+(")`, 'g');
    
    if (!idPattern.test(content)) {
      console.error(`❌ 포트폴리오 ID ${portfolioId}를 찾을 수 없습니다.`);
      process.exit(1);
    }
    
    // 다시 읽어서 치환 (정규식 상태 초기화)
    content = content.replace(
      new RegExp(`(id:\\s*${portfolioId},[\\s\\S]*?thumbnail:\\s*")[^"]+(")`, 'g'),
      `$1${thumbnailPath}$2`
    );
    
    // 파일 쓰기
    fs.writeFileSync(portfolioPagePath, content, 'utf8');
    
    console.log(`✅ 포트폴리오 ID ${portfolioId}의 썸네일이 업데이트되었습니다.`);
    console.log(`   새 경로: ${thumbnailPath}`);
    console.log(`\n💡 파일이 public 폴더에 있는지 확인하세요: public/${fileName}`);
    
  } catch (error) {
    console.error('❌ 오류 발생:', error.message);
    process.exit(1);
  }
}

// 명령행 인자 확인
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('사용법: node scripts/update-portfolio-thumbnail.js <포트폴리오ID> <파일명>');
  console.log('\n예시:');
  console.log('  node scripts/update-portfolio-thumbnail.js 1 cafe-thumbnail.jpg');
  console.log('  node scripts/update-portfolio-thumbnail.js 2 salon-new.jpg');
  console.log('\n현재 포트폴리오 목록:');
  console.log('  1: 카페 모던');
  console.log('  2: 미용실 아름');
  console.log('  3: 따뜻한 국밥');
  console.log('  4: 요가 스튜디오');
  console.log('  5: 의류 매장');
  console.log('  6: 애견 미용실');
  process.exit(1);
}

const portfolioId = parseInt(args[0]);
const fileName = args[1];

if (isNaN(portfolioId)) {
  console.error('❌ 포트폴리오 ID는 숫자여야 합니다.');
  process.exit(1);
}

updatePortfolioThumbnail(portfolioId, fileName);

