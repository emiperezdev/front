import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface CustomAlertDialogProps {
  children: React.ReactNode;
  onConfirm?: () => void;
  variant: 'edit' | 'delete' | 'create';
  subject: string;
  gender: 'masculine' | 'feminine' | 'neutral';
  description?: string;
}

export function CustomAlertDialog({
  children,
  onConfirm,
  variant,
  subject,
  gender = 'masculine',
  description,
}: CustomAlertDialogProps) {
  const getTitleAndDescription = () => {
    if (description)
      return {
        title: 'Acción denegada',
        description,
      };

    const actionVerb =
      variant === 'delete'
        ? 'eliminar'
        : variant === 'edit'
          ? 'editar'
          : variant === 'create'
            ? 'crear'
            : '';

    const article =
      gender === 'feminine' ? 'la' : gender === 'neutral' ? 'lo' : 'el';

    const title = `¿Estás seguro de ${actionVerb} ${article} ${subject}?`;
    const defaultDescription = `Confirma si deseas continuar.`;

    return { title, description: defaultDescription };
  };

  const { title, description: dialogDescription } = getTitleAndDescription();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{dialogDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} disabled={!onConfirm}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
