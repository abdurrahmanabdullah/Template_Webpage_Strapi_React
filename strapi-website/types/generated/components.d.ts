import type { Schema, Attribute } from '@strapi/strapi';

export interface CardContentCard extends Schema.Component {
  collectionName: 'components_card_content_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    button: Attribute.String;
  };
}

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    address: Attribute.String;
    telephone: Attribute.String;
    mobile: Attribute.String;
    website: Attribute.String;
    footer: Attribute.String;
  };
}

export interface ContentBlog extends Schema.Component {
  collectionName: 'components_content_blogs';
  info: {
    displayName: 'blog';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ContentContent extends Schema.Component {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.Text;
  };
}

export interface ContentElement extends Schema.Component {
  collectionName: 'components_content_elements';
  info: {
    displayName: 'element';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    list: Attribute.Component<'content.list', true>;
  };
}

export interface ContentHero extends Schema.Component {
  collectionName: 'components_content_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    button: Attribute.String;
  };
}

export interface ContentList extends Schema.Component {
  collectionName: 'components_content_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    item: Attribute.String;
  };
}

export interface DynamicAboutUs extends Schema.Component {
  collectionName: 'components_dynamic_about_uses';
  info: {
    displayName: 'about us';
  };
  attributes: {
    address: Attribute.String;
    email: Attribute.Email;
  };
}

export interface DynamicContact extends Schema.Component {
  collectionName: 'components_dynamic_contacts';
  info: {
    displayName: 'contact';
    description: '';
  };
  attributes: {
    time: Attribute.String;
    phone: Attribute.String;
  };
}

export interface DynamicDescription extends Schema.Component {
  collectionName: 'components_dynamic_descriptions';
  info: {
    displayName: 'Description';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
  };
}

export interface DynamicDynamic extends Schema.Component {
  collectionName: 'components_dynamic_dynamics';
  info: {
    displayName: 'Dynamic';
  };
  attributes: {
    price: Attribute.BigInteger;
    RegularPrice: Attribute.BigInteger;
    Status: Attribute.String;
    productCode: Attribute.BigInteger;
    Brand: Attribute.String;
  };
}

export interface DynamicFooter extends Schema.Component {
  collectionName: 'components_dynamic_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    Support: Attribute.Component<'dynamic.contact'>;
    StayConnected: Attribute.Component<'dynamic.about-us'>;
    AboutUs: Attribute.Component<'dynamic.important-link', true>;
  };
}

export interface DynamicImportantLink extends Schema.Component {
  collectionName: 'components_dynamic_important_links';
  info: {
    displayName: 'ImportantLink';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface DynamicKeyFeatures extends Schema.Component {
  collectionName: 'components_dynamic_key_features';
  info: {
    displayName: 'KeyFeatures';
  };
  attributes: {
    Model: Attribute.String;
    Resolution: Attribute.String;
    Display: Attribute.String;
    Port: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card-content.card': CardContentCard;
      'contact.contact': ContactContact;
      'content.blog': ContentBlog;
      'content.content': ContentContent;
      'content.element': ContentElement;
      'content.hero': ContentHero;
      'content.list': ContentList;
      'dynamic.about-us': DynamicAboutUs;
      'dynamic.contact': DynamicContact;
      'dynamic.description': DynamicDescription;
      'dynamic.dynamic': DynamicDynamic;
      'dynamic.footer': DynamicFooter;
      'dynamic.important-link': DynamicImportantLink;
      'dynamic.key-features': DynamicKeyFeatures;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
