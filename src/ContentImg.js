import useCatImage from "./useCatImage";

export default function ContentImg() {
  const catUrl = useCatImage();
  return (
    <div>
      <img src={catUrl} alt="" />
    </div>
  );
}
