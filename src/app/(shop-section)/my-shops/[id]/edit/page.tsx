import { LeftPanel } from '@/widgets/store-editor/left-panel/ui/LeftPanel';
import { RightPanel } from '@/widgets/store-editor/right-panel/ui/RightPanel';
import { Viewport } from '@/widgets/store-editor/viewport/ui/Viewport';

export default async function Page() {
  return (
    <div className="flex flex-1 flex-row gap-8 w-full">
      <div className="">
        <LeftPanel />
      </div>
      <div className="flex-1">
        <Viewport />
      </div>
      <div className="">
        <RightPanel />
      </div>
    </div>
  );
}
