import ApplicationCustomizerContext from "@microsoft/sp-application-base/lib/extensibility/ApplicationCustomizerContext";
import { IBreadcrumbItem } from "office-ui-fabric-react/lib/Breadcrumb";

export interface ISiteBreadcrumbProps {
  context: ApplicationCustomizerContext;
}

export interface ISiteBreadcrumbState {
  breadcrumbItems: IBreadcrumbItem[];
}

export interface IWebInfo {
  Id: string;
  Title: string;
  ServerRelativeUrl: string;
  error?: any;
}
