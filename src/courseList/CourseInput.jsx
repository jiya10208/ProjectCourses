export default function CourseInput({ label, id, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
