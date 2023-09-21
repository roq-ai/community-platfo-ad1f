interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Content Creator', 'Moderator', 'Subscriber', 'Guest'],
  tenantName: 'Company',
  applicationName: 'Community platform',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage contents',
    'Manage forums',
    'Manage discussions',
    'Manage subscriptions',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/89c13c88-af98-4371-a83b-761cb381d410',
};
