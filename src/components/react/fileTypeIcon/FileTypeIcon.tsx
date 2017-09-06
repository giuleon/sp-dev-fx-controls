import * as React from "react";
import { findIndex } from '@microsoft/sp-lodash-subset';
import { IFileTypeIconProps, ApplicationType, ApplicationIconList, IconType, IconSizes, ImageSize, IImageResult, ICON_GENERIC_16, ICON_GENERIC_48, ICON_GENERIC_96 } from "./IFileTypeIcon";

const ICON_GENERIC = "FileTemplate";
const ICON_DEFAULT_SIZE = "icon16";

/**
 * File type icon component
 */
export class FileTypeIcon extends React.Component<IFileTypeIconProps, {}> {
    constructor(props: IFileTypeIconProps) {
        super(props);
    }

    /**
     * @function
     * Function which returns the font icon
     */
    private _getIconClassName(): string {
        let className = ICON_GENERIC;

        // Check if the path property is provided
        if (typeof this.props.path !== "undefined" && this.props.path !== null) {
            const path: string = this.props.path;
            const fileExtension: string = this._getFileExtension(path);
            // Check the known file extensions list
            const iconName = this._getIconByExtension(fileExtension, IconType.font);
            if (iconName !== null) {
                className = iconName;
            }
        }
        // Check if the application name has been provided
        else if (typeof this.props.application !== "undefined" && this.props.application !== null) {
            const application: ApplicationType = this.props.application;
            const iconName = this._getIconByApplicationType(application, IconType.font);
            if (iconName !== null) {
                className = iconName;
            }
        }

        return className;
    }


    /**
     * @function
     * Function which returns the image icon
     */
    private _getIconImageName(): IImageResult {
        let size = ICON_DEFAULT_SIZE;
        let image: string | null = null;

        // Get the right icon size to display
        if (typeof this.props.size !== "undefined" && this.props.size !== null) {
            // Retrieve the right icon size
            size = this._getFileSizeName(this.props.size);
        }

        // Check if the path is provided
        if (typeof this.props.path !== "undefined" && this.props.path !== null) {
            const path: string = this.props.path;
            const fileExtension: string = this._getFileExtension(path);
            // Get the image for the current file extension
            image = this._getIconByExtension(fileExtension, IconType.image);
        }
        // Check if the application name has been provided
        else if (typeof this.props.application !== "undefined" && this.props.application !== null) {
            const application: ApplicationType = this.props.application;
            image = this._getIconByApplicationType(application, IconType.image);
        }

        return {
            size: size,
            image: image
        };
    }

    /**
     * @function
     * Function to retrieve the file extension from the path
     *
     * @param value File path
     */
    private _getFileExtension(value): string {
        const splittedValue = value.split('.');
        return splittedValue.pop();
    }

    /**
     * @function
     * Find the icon name for the provided extension
     *
     * @param extension File extension
     */
    private _getIconByExtension(extension: string, iconType: IconType): string {
        // Find the application index by the provided extension
        const appIdx = findIndex(ApplicationIconList, item => { return item.extensions.indexOf(extension.toLowerCase()) !== -1; });

        // Check if an application has found
        if (appIdx !== -1) {
            // Check the type of icon, the image needs to get checked for the name
            if (iconType === IconType.font) {
                return ApplicationIconList[appIdx].iconName;
            } else {
                const knownImgs = ApplicationIconList[appIdx].imageName;
                // Check if the file extension is known
                const imgIdx = knownImgs.indexOf(extension);
                if (imgIdx !== -1) {
                    return knownImgs[imgIdx];
                } else {
                    // Return the first one if it was not known
                    return knownImgs[0];
                }
            }
        }

        return null;
    }

    /**
     * @function
     * Find the icon name for the application
     *
     * @param application
     */
    private _getIconByApplicationType(application: ApplicationType, iconType: IconType): string {
        // Find the application index by the provided extension
        const appIdx = findIndex(ApplicationIconList, item => item.application === application);

        // Check if an application has found
        if (appIdx !== -1) {
            const knownApp = ApplicationIconList[appIdx];
            if (iconType === IconType.font) {
                return knownApp.iconName;
            } else {
                // Check if the application has a known list of image types
                if (knownApp.imageName.length > 0) {
                    return knownApp.imageName[0];
                }
            }
        }

        return null;
    }

    /**
     * @function
     * Return the right image size for the provided value
     *
     * @param value Image size value
     */
    private _getFileSizeName(value: ImageSize): string {
        // Find the image size index by the image size
        const sizeIdx = findIndex(IconSizes, size => size.size === value);

        // Check if an icon size has been retrieved
        if (sizeIdx !== -1) {
            // Return the first icon size
            return IconSizes[sizeIdx].name;
        }

        // Return the default file size if nothing was found
        return ICON_DEFAULT_SIZE;
    }

    /**
     * Default React component render method
     */
    public render(): React.ReactElement<IFileTypeIconProps> {
        let iconElm = <span />;

        // Check the type of icon that needs to be displayed
        if (this.props.type === IconType.image) {
            // Return an image icon element
            const iconImage = this._getIconImageName();
            // Check if the image was found, otherwise a generic image will be returned
            if (iconImage.image !== null) {
                iconElm = <div style={{ display: 'inline-block' }} className={`ms-BrandIcon--${iconImage.size} ms-BrandIcon--${iconImage.image}`}></div>;
            } else {
                // Return a generic image
                let imgElm = <img />;
                // Check the size of the generic image which has to be returned
                switch (iconImage.size) {
                    case "icon16":
                        imgElm = <img src={ICON_GENERIC_16} />;
                        break;
                    case "icon48":
                        imgElm = <img src={ICON_GENERIC_48} />;
                        break;
                    case "icon96":
                        imgElm = <img src={ICON_GENERIC_96} />;
                        break;
                    default:
                        imgElm = <img src={ICON_GENERIC_16} />;
                        break;
                }

                iconElm = (
                    <div style={{ display: 'inline-block' }}>
                        {imgElm}
                    </div>
                );
            }
        } else {
            // Return the icon font element
            const iconClass = this._getIconClassName();
            iconElm = <i className={`ms-Icon ms-Icon--${iconClass}`} aria-hidden="true"></i>;
        }

        // Return the icon element
        return iconElm;
    }
}
