interface CenterContainerProps {
  children: React.ReactNode;
}

export const CenterContainer = ({children}: CenterContainerProps) => {
  return (
    <div className="flex flex-col items-center gap-2 m-6">
      {children}
    </div>
  )
}
