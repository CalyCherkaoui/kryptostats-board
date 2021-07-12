/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const CoinDetailInfo = ({
  infoImage,
  infoName,
  infoSymbol,
  infoDescription,
  infoCurrentPrice,
  infoChange24,
  infoVolume,
}) => {
  const description = `<p>${infoDescription}</p>`;
  const parsedDescription = parse(description);
  return (
    <div className="coin_page_info_wrapper">
      <div className="coin_page_about">
        <img src={infoImage} alt={infoName} className="coin_page_about_image" />
        <div className="coin_page_name_symbol">
          <span>{infoName}</span>
          <span>{infoSymbol}</span>
        </div>
        <div className="coin_page_about_description">{parsedDescription}</div>
        <div className="coin_page_data">
          <div className="coin_page_data_current_price">
            {infoCurrentPrice}
          </div>
          <div className="coin_page_data_total_vol">
            {infoVolume}
          </div>
          <div className="coin_page_data_change24h">
            {infoChange24}
          </div>
        </div>
      </div>
    </div>
  );
};

CoinDetailInfo.propTypes = {
  infoName: PropTypes.string.isRequired,
  infoSymbol: PropTypes.string.isRequired,
  infoImage: PropTypes.string.isRequired,
  infoDescription: PropTypes.string.isRequired,
  infoCurrentPrice: PropTypes.number.isRequired,
  infoChange24: PropTypes.number.isRequired,
  infoVolume: PropTypes.number.isRequired,
};

export default CoinDetailInfo;
