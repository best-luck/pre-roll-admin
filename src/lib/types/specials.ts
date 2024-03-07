export interface SpecialType {
  id: string;
  name: string;
  type: string;
  redemptionLimit: string;
  menuType: string;
  emailConfiguration: {
    description: string,
    descriptionHtml: string,
    subject: string,
    heading: string,
    enabled: boolean
  };
  scheduleConfiguration: {
    startStamp: string,
    endStamp: string,
  },
  menuDisplayConfiguration: {
    name: string,
    description: string,
    image: string
  }
}