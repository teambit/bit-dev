import React from 'react';
import classNames from 'classnames';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import { Button } from '@teambit/design.ui.buttons.button';
import { Logo } from '@teambit/design.ui.logo';
import { ComponentCards } from '@teambit/community.entity.component-cards';
import { Price } from '@learn-bit-react/ecommerce.ui.product.price';
import { ProductCard } from '@learn-bit-react/ecommerce.ui.product.product-card';
import { ProductCardGrid } from '@learn-bit-react/ecommerce.ui.product.product-card-grid';
import { mockProductList } from '@learn-bit-react/ecommerce.entity.product';
import { Header } from '@learn-bit-react/ecommerce.ui.header';
import { StoreHero } from '@learn-bit-react/ecommerce.ui.store-hero';
import styles from './component-card-grid.module.scss';

export type ComponentCardGridProps = {
  /**
   * a text to be rendered in the component.
   */
  componentCards: ComponentCards[];
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentCardGrid({
  componentCards,
  className
}: ComponentCardGridProps) {
  return (
    <div className={classNames(styles.componentCardGrid, className)}>
      <ComponentCard
        id="teambit.community/ui/homepage/logo@1.0.1"
        version="2.3.0"
        description="Logo for the store"
        envIcon="https://static.bit.dev/brands/logo-react.svg"
        preview={<Button>click me</Button>}
      />

      <ComponentCard
        id="teambit.community/ui/homepage/logo@1.0.1"
        version="2.3.0"
        description="Logo for the store"
        envIcon="https://static.bit.dev/brands/logo-react.svg"
        preview={<Logo />}
      />

      <ComponentCard
        id="teambit.community/ui/homepage/logo@1.0.1"
        version="2.3.0"
        description="Logo for the store"
        envIcon="https://static.bit.dev/brands/logo-react.svg"
        preview={<Price price={120} />}
      />
      {/* <ComponentCard
        id="teambit.community/ui/homepage/logo@1.0.1"
        version="2.3.0"
        description="Logo for the store"
        envIcon="https://static.bit.dev/brands/logo-react.svg"
        preview={
          <ProductCard
            title="Nike Air"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus"
            alt="Nike Air"
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHNuZWFrZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            price={160}
            buttonText="add to cart"
          />
        }
      /> */}
      {/* <ComponentCard
        id="teambit.community/ui/homepage/logo@1.0.1"
        version="2.3.0"
        description="Logo for the store"
        envIcon="https://static.bit.dev/brands/logo-react.svg"
        preview={<ProductCardGrid list={mockProductList} />}
      /> */}
      {/* 
      <ComponentCard
        id="teambit.community/ui/homepage/logo@1.0.1"
        version="2.3.0"
        description="Logo for the store"
        envIcon="https://static.bit.dev/brands/logo-react.svg"
        preview={
          <Header
            logoText="Bit Sports Store"
            src="https://static.bit.dev/bit-logo.svg"
            alt="Bit Logo"
          >
            The store
          </Header>
        }
      /> */}
      {/* <ComponentCard
        id="teambit.community/ui/homepage/logo@1.0.1"
        version="2.3.0"
        description="Logo for the store"
        envIcon="https://static.bit.dev/brands/logo-react.svg"
        preview={<StoreHero headingText="store heading" background="blue" />}
      /> */}

      {/* {componentCards.map((componentCard) => (
        <ComponentCard
          style={{ width: '300px' }}
          key={componentCard.id}
          id={componentCard.id}
          version={componentCard.version}
          description={componentCard.description}
          envIcon={componentCard.envIcon}
          preview={componentCard.preview}
        />
      ))} */}
    </div>
  );
}
