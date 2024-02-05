import React from "react";
import PropTypes from "prop-types";
import Button from "@ui/button";
import Image from "@ui/image";
//import { StaticImage } from "gatsby-plugin-image";
import { HeadingType, TextType, ImageType, ButtonType } from "@utils/types";

const HeroArea = ({ data }) => {
    return (
        <div className="slide slider-style-4">
            <div className="hero-img">
                <Image src="zkCloudWorker.png" alt="DFST" />
            </div>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-12">
                        <div className="content">
                            <div className="inner  mb_sm--80 mb--0">
                                {data?.headings?.[0] && (
                                    <h1
                                        className="title color-white"
                                        dangerouslySetInnerHTML={{
                                            __html: data.headings[0]?.content,
                                        }}
                                    />
                                )}
                                {data?.texts?.[0] && (
                                    <p className="subtitle color-white">
                                        {data.texts[0]?.content}
                                    </p>
                                )}
                                {data?.buttons?.map(({ id, path, content }) => (
                                    <Button
                                        key={id}
                                        path={path}
                                        className="shadow-none"
                                    >
                                        <span>{content}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default HeroArea;
