import { IMyInfoFormProps } from "components/User/MyInfoForm/IMyInfoForm";
import { IProfitBannerProps } from "components/User/ProfitBanner/lProfitBanner";

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
