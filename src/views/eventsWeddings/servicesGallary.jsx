import React from 'react';
import PropType from 'prop-types';
import clsx from 'clsx';

const ServicesGallary = ({ ArrayData, sectionTitle, sectionParagraph, CorporateEvents }) => {
  return (
    <>
      <section className={clsx(`event-wedding-block ServicesGallarySection`, CorporateEvents && 'CorporateEventsSection')}>
        <div className="container">
          <div className="row text-center">
            <h2 className="section-title"> {sectionTitle ? sectionTitle : 'Wedding services'}</h2>
            <div className="col-12 col-md-9 m-auto">
              <p className="section-paragraph">
                {sectionParagraph
                  ? sectionParagraph
                  : `Lorem ipsum dolor sit amet consectetur. Euismod ut est cras viverra fermentum dui sit ac nam. Suspendisse ultricies nullam amet arcu.
                Mauris odio duis aliquam a id diam consequat. Tellus molestie tempor tincidunt molestie volutpat. Libero turpis blandit`}
              </p>
            </div>
          </div>

          <div className="row events-gallary">
            {CorporateEvents ? (
              <>
                {ArrayData.map((row) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-4" key={row.id}>
                      <div className="content">
                        <div className="content-overlay"></div>
                        <img src={row.image} alt="Catering" className="content-image" />
                        <div className="content-details fadeIn-bottom">
                          <h3 className="content-title">{row.title}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {ArrayData.map((row) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-3" key={row.id}>
                      <div className="content">
                        <div className="content-overlay"></div>
                        <img src={row.image} alt="Catering" className="content-image" />
                        <div className="content-details fadeIn-bottom">
                          <h3 className="content-title">{row.title}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

ServicesGallary.propTypes = {
  ArrayData: PropType.array,
  imageUrl: PropType.bool,
  title: PropType.string,
  sectionTitle: PropType.string,
  sectionParagraph: PropType.string,
  CorporateEvents: PropType.bool
};
export default ServicesGallary;
