export default function ButtonPrimary({ children, ...rest }) {
  return (
    <button className="primary-button" {...rest}>
      {children}
    </button>
  );
}
