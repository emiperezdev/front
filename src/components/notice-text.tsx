interface NoticeTextProps {
  children: React.ReactNode;
}

export const NoticeText = ({ children }: NoticeTextProps) => {
  return (
    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary m-4">
      {children}
    </div>
  );
};
