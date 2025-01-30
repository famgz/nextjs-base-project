import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="h-full w-full flex-center">
      <div className="flex-center max-sm:flex-col">
        <div className="flex flex-col items-center p-10 max-sm:border-b sm:border-r">
          <p className="text-4xl font-bold">404</p>
          <h1 className="text-center text-2xl font-light">
            Este recurso não foi encontrado
          </h1>
        </div>
        <div className="flex h-full flex-col justify-between gap-12 p-10">
          <Button size={'lg'}>
            <Link href={'/'} className="text-lg !font-bold">
              Voltar para Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
