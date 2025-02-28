interface CellContainerProps {
  children: React.ReactNode;
}

export const CellContainer = ({ children }: CellContainerProps) => {
  return (
    <div className="flex text-center justify-start">{ children }</div>
  )
}
