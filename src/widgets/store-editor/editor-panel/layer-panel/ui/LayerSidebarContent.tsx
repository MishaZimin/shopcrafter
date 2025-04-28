import { Accordion } from '@/shared/ui/accordion';
import { LayerItem } from './LayerItem';
import { ILayer } from '../model/types';

export function LayerSidebarContent({ layers }: { layers: ILayer[] }) {
  return (
    <Accordion type="multiple" className="w-full">
      {layers.map((layer) => (
        <LayerItem key={layer.id} layer={layer} />
      ))}
    </Accordion>
  );
}
