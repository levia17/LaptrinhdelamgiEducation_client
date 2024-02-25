import style from "./blog.module.scss";

function Blog(info) {
    console.log(info);
  return (
    <div className={style.blog}>
      <img
        src={info.bgPath}
        alt="bg.png"
      />
      <div className={style.title}>{info.title}</div>
    </div>
  );
}

export default Blog;
