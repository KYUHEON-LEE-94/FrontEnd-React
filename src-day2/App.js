import './App.css';
import Header from './Header.js'
import Nav from './nav.js'
import Article from './article.js'
import React, { useState } from 'react';



function App() {
  let datas =[
    {id:1, title:'HTML', desc:"HTML (ハイパーテキスト・マークアップ・ランゲージ／Hypertext Markup Language) は、訪れたウェブサイトの構成をブラウザーに対して伝えるために使うマークアップ言語です。 HTML 言語はウェブ開発者が望むこと次第で、複雑なものにも簡単なものにもなります。"},
    {id:2, title:'CSS', desc:"Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어입니다. CSS는 요소가 화면, 종이, 음성이나 다른 매체 상에 어떻게 렌더링되어야 하는지 지정합니다."},
    {id:3, title:'Java Script', desc:"JavaScript (JS) は軽量で、インタープリター型、あるいは実行時コンパイルされる、第一級関数を備えたプログラミング言語です。ウェブページでよく使用されるスクリプト言語として知られ、多くの非ブラウザー環境、例えば Node.js や Apache CouchDB や Adobe Acrobat などでも使用されています。"},
    {id:4, title:'React', desc:"React は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルな View を設計するだけで、React はデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。"}
] 

  const [mode, setmode] = useState('Home');
  const [selectedId, setSelectedId] = useState(null);

let article = null;
if(mode == 'Home'){
  article = (
    <Article title={"Home"} desc ="Webとは、インターネット上で標準的に用いられている文書の公開・閲覧システム。文字や図表、画像、動画などを組み合わせた文書を配布することができる。文書内の要素に別の文書を指し示す参照情報（ハイパーリンク）を埋め込むことができる「ハイパーテキスト」（hypertext）と呼ばれるシステムの一種である。"/>
  )
}else if(mode == "Page"){
let filterList =  datas.filter((list)=>{return list.id == selectedId})
  
}

  
  return (
  <div className='wrap'>
    <Header changeModule={()=>{setmode("Home")}}/>
    <Nav datas = {datas} changeModule={(id)=>{setmode("Page")
                                              setSelectedId(Number(id))}}/>
    {article}
  </div>
  );
  
}


export default App;
