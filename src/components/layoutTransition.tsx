export default function LayoutTransition({ children, isPending }) {
  return (
    <div>
      <section  style={{
        opacity: isPending ? 0.7 : 1
      }}>
      </section>
      <section>
        {children}
      </section>
    </div>
  );
}