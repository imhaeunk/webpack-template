//webpac이 nodejs에서 돌아가는 이유
//파일을 읽고 변환해야 하기 때문에 

// webpack.config.js 
//entry 포인트를 여러개 만들 수도 있음.

// babel preset을 설치하면 플러그인 하나하나 설치 안해도됨.

//package.json에 browserlist는 필수

//상대경로는 파일의 이동에 따라서 무효될 수 있기 때문에 프로젝트에서는 안쓰는게 좋음
//대신 경로 별칭 사용
alias: {
  '~': path.resolve(__dirname, 'src') //~ 권장
  //src라는 폴더경로 별칭 지정
}