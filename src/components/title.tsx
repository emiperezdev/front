interface NoticeTextProps {
  children: React.ReactNode;
}

export const Title = ({ children }: NoticeTextProps) => {
  return (
    <h1 className="text-xl font-bold">
      {children}
    </h1>
  );
};
