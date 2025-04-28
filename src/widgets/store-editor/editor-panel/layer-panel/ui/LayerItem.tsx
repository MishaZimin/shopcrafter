import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import { ILayer } from '../model/types';

export function LayerItem({ layer }: { layer: ILayer }) {
  const hasChildren = layer.children;

  if (hasChildren) {
    return (
      <AccordionItem value={layer.id}>
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <layer.icon className="w-4 h-4" />
            {layer.title}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="pl-4">
            {layer.children!.map((child) => (
              <LayerItem key={child.id} layer={child} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer hover:bg-gray-100">
      <layer.icon className="w-4 h-4 text-muted-foreground" />
      {layer.title}
    </div>
  );
}
