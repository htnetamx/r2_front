import { IProfitBannerProps } from "components/User/ProfitBanner/lProfitBanner";

import { IMyInfoFormProps } from "./MyInfoForm/IMyInfoForm";

export interface IInfoContainerProps {
  /**
   * The profitBannerProps of ProfitBanner component
   * @type {IProfitBannerProps}
   *
   * */
  profitBannerProps: IProfitBannerProps;

  /**
   * The myInfoFormProps of MyInfoForm component
   * @type {IMyInfoFormProps}
   *
   * */
  myInfoFormProps: IMyInfoFormProps;
}
