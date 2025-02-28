interface RowContainerProps {
  children: React.ReactNode;
}

export const RowContainer = ({ children }: RowContainerProps) => {
  return <div className="flex justify-between items-center">{children}</div>;
};
