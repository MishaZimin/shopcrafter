'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { BaseModal } from '@/shared/ui/Modal/Modal';
import { DialogTitle } from '@/shared/ui/dialog';
import {
  useCreateProduct,
  useProduct,
  useUpdateProduct,
} from '../api/useProduct';
import { ImagePicker } from '@/shared/ui/image-picker';
import { ImagePreview } from '@/shared/ui/image-preview';
import { productFormSchema } from '../model/productFormSchema';
import type { ProductFormValues } from '../model/productFormSchema';
import { useAtomValue } from 'jotai';
import { imageBlocksAtom } from '@/shared/lib/image-store';
import { Textarea } from '@/shared/ui/textarea';

interface IProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  storeId: number;
  categoryId: number;
  productId?: number;
  initialData?: {
    name: string;
    description: string;
    price: number;
    stock: number;
  };
}

const IMAGE_BLOCK_KEY = 'productImage';

export const CreateOrEditProductModal = ({
  open,
  onOpenChange,
  storeId,
  categoryId,
  productId,
  initialData,
}: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: initialData || {
      name: '',
      description: '',
      price: 0,
      stock: 0,
    },
  });
  const [imageError, setImageError] = useState<string | null>(null);
  const imageBlocks = useAtomValue(imageBlocksAtom);
  const imageFile = imageBlocks[IMAGE_BLOCK_KEY]?.file as File;
  // const hasImage = !!imageBlocks[IMAGE_BLOCK_KEY]?.url;

  const { data: productData } = useProduct(
    storeId,
    categoryId,
    productId ?? 0,
    { enabled: !!productId && open }
  );

  const createMutation = useCreateProduct(storeId, categoryId);
  const updateMutation = useUpdateProduct(storeId, categoryId, productId ?? 0);

  useEffect(() => {
    if (productData) {
      setValue('name', productData.name);
      setValue('description', productData.description || '');
      setValue('price', productData.price);
      setValue('stock', productData.stock);
    }
  }, [productData, setValue]);

  const onSubmit = async (data: ProductFormValues) => {
    try {
      if (!imageFile) {
        setImageError('Изображение обязательно');
        return;
      }

      if (productId) {
        await updateMutation.mutateAsync({ ...data, image: imageFile });
      } else {
        await createMutation.mutateAsync({ ...data, image: imageFile });
      }

      onOpenChange(false);
      reset();
    } catch (error) {
      console.error('Ошибка при сохранении товара:', error);
    }
  };

  return (
    <BaseModal open={open} onOpenChange={onOpenChange} size="md">
      <DialogTitle asChild>
        <VisuallyHidden>
          {productId ? 'Редактировать товар' : 'Создание товара'}
        </VisuallyHidden>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h1 className="text-h5">
            {productId ? 'Редактировать товар' : 'Новый товар'}
          </h1>
        </div>

        <div className="grid gap-2">
          <label className="text-S font-medium">Фото товара</label>
          <div className="flex flex-row gap-2 ">
            <div className="h-[272px] min-w-[272px]">
              <ImagePreview
                blockKey={IMAGE_BLOCK_KEY}
                className="rounded-md object-cover"
                showPlaceholder={true}
              />
            </div>
            <ImagePicker
              className="w-full"
              blockKey={IMAGE_BLOCK_KEY}
              text={'Загрузить файл'}
            />
          </div>
          {imageError && <p className="text-S text-red-500">{imageError}</p>}
        </div>

        <div className="grid gap-2">
          <label className="text-S font-medium" htmlFor="name">
            Название
          </label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Введите название"
          />
          {errors.name && (
            <p className="text-S text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="text-S font-medium" htmlFor="price">
            Цена
          </label>
          <Input
            id="price"
            type="number"
            {...register('price', { valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-S text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label className="text-S font-medium" htmlFor="description">
            Описание
          </label>
          <Textarea
            id="description"
            {...register('description')}
            placeholder="Описание товара"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-S font-medium" htmlFor="stock">
            Количество
          </label>
          <Input
            id="stock"
            type="number"
            {...register('stock', { valueAsNumber: true })}
          />
          {errors.stock && (
            <p className="text-S text-red-500">{errors.stock.message}</p>
          )}
        </div>

        <div className="flex justify-between pt-4 gap-2">
          <Button
            type="submit"
            className="bg-[#0A0F1C] text-white hover:bg-[#1A1F2C] flex-1"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? productId
                ? 'Сохранение...'
                : 'Создание...'
              : productId
                ? 'Сохранить'
                : 'Создать'}
          </Button>
        </div>
      </form>
    </BaseModal>
  );
};
