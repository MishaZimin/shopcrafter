import { SidebarProvider } from '@/shared/ui/sidebar';
import { LayerSidebar } from '@/widgets/store-editor/editor-panel/layer-panel/ui/LayerSidebar';

export const LeftPanel = () => {
  return (
    <>
      <div className="h-[50px] bg-gray-100 rounded-md w-full mb-4"></div>
      <SidebarProvider>
        <LayerSidebar />
      </SidebarProvider>
    </>
  );
};
