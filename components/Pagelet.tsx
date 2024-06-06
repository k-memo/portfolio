interface IPageletProps {
  title?: string;
  children: React.ReactNode;
}

export default function Pagelet({ title, children }: IPageletProps) {
  return (
    <div className="pagelet">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
