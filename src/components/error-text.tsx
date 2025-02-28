interface ErrorTextProps {
  children: React.ReactNode;
}

export const ErrorText = ({ children }: ErrorTextProps) => {
  return (
    <span className="text-red-500 text-sm font-medium">
      {children}
    </span>
  );
};
