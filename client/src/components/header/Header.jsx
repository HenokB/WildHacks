import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">THE AMAZON RAINFOREST</span>
        <span className="headerTitleLg">Jungle</span>
      </div>
      <img
        className="headerImg"
        src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/05/brazil-amazon-rainforest-0503211.jpg"
        alt=""
      />
    </div>
  );
}
