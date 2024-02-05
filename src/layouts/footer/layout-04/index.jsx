import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Logo from "@components/logo";
import Icon from "@ui/icon";
import Social, { SocialLink } from "@ui/social";
import WidgetBox from "@components/widgets/widget-box";
import WidgeTitle from "@components/widgets/widget-title";
import WidgetMenu from "@components/widgets/widget-menu";
import { ImageType, MenuType, SocialType } from "@utils/types";

const Footer = ({ className, data }) => {
    return (
        <div
            id="footer"
            className={cn(
                "rn-footer-area footer-style-2",
                className
            )}
        >
            <div className="copyright text-center ptb--40 section-separator">
                <p className="description">
                    &copy; {new Date().getFullYear()}.{" "}
                    {data?.copyright_text && (
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.copyright_text,
                            }}
                        />
                    )}
                </p>
            </div>
        </div>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        copyright_text: PropTypes.string,
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        widgets: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                title: PropTypes.string,
                menu: PropTypes.arrayOf(PropTypes.shape(MenuType)),
            })
        ),
    }),
};

export default Footer;
