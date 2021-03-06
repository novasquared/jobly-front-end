import { Link } from "react-router-dom";

/** Component for a single company
 * 
 *  Props:
 *  - handle, name, description, logo
 * 
 *  State: 
 *  - None
 * 
 *  CompanyList -> CompanyCard
 *
 */
function CompanyCard({ handle, name, description, logo }) {
    console.log("CompanyCard:", { handle, name, description, logo })
    const linkURL = `/companies/${handle}`;

    return (
        <div className="CompanyCard card mb-3">
            <Link exact to={linkURL}
                className="CompanyCard-card bg-white text-dark
                text-decoration-none">
                <h6 className="card-header text-uppercase">{name}</h6>
                <div className="card-body">
                    <div className="media">
                        {logo !== null &&
                            <img src={logo} alt="logo" class="col-1 float-start m-2"></img>}
                        <div className="media-body">
                            <div className="card-text ms-5 me-4">{description}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default CompanyCard;