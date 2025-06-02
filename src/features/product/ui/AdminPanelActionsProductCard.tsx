'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/button';
// import { Pencil, EyeOff, Trash2 } from 'lucide-react';
import { Pencil, Trash2 } from 'lucide-react';
import { CreateOrEditProductModal } from './CreateOrEditProductModal';
import { DeleteProductModal } from './DeleteProductModal';
import { useStoreCategoryIds } from '../model/useStoreCategoryIds';
import { useDeleteProduct, useProduct } from '../api/useProduct';

interface IProps {
  productId: number;
  imageUrl?: string;
  onDeleted?: (id: number) => void;
}

export const AdminPanelActionsProductCard = ({
  productId,
  imageUrl,
  onDeleted,
}: IProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { storeId, categoryId } = useStoreCategoryIds();

  const deleteProductMutation = useDeleteProduct(storeId, categoryId);

  const { data: productData } = useProduct(storeId, categoryId, productId, {
    enabled: isEditModalOpen && !!storeId && !!categoryId,
  });

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditModalOpen(true);
  };

  // const handleHide = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   console.log(`Скрыть товар ${productId}`);
  // };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!storeId || !categoryId) return;

    try {
      await deleteProductMutation.mutateAsync(productId);
      onDeleted?.(productId);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('ошибка при удалении товара:', error);
    }
  };

  return (
    <>
      <div className="flex gap-1 max-h-8">
        <Button
          className="h-8 w-8 hover:bg-gray-200 p-2"
          variant="ghost"
          size="icon"
          onClick={handleEdit}
        >
          <Pencil className="w-6 h-6" />
        </Button>
        {/* <Button
          className="h-6 w-6 hover:bg-gray-200"
          variant="ghost"
          size="icon"
          onClick={handleHide}
        >
          <EyeOff className="w-4 h-4" />
        </Button> */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDeleteClick}
          className="text-red-500 h-8 w-8 hover:bg-gray-200"
          disabled={deleteProductMutation.isPending}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      {isEditModalOpen && storeId && categoryId && (
        <CreateOrEditProductModal
          open={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
          storeId={storeId}
          categoryId={categoryId}
          productId={productId}
          initialData={
            productData
              ? {
                  name: productData.name,
                  description: productData.description || '',
                  price: productData.price,
                  stock: productData.stock,
                  imageUrl: imageUrl,
                }
              : undefined
          }
        />
      )}

      <DeleteProductModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
        isDeleting={deleteProductMutation.isPending}
      />
    </>
  );
};
