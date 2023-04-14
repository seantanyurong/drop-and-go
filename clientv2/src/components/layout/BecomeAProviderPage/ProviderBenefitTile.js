import { CheckIcon } from "@heroicons/react/20/solid";


const ProviderBenefitTile = (props) => {
    const { heading, body } = props

    return(
        <div>
            {/* Provider Benefit Tile Icon */}
            <h3 className="flex text-2xl leading-6 tracking-tight font-normal text-gray-900 mb-5">
                <CheckIcon className="h-7 w-7 mr-2"/>
                {heading}
            </h3>

            {/* Provider Benefit Tile Text */}
            <p className="text-sm leading-5 tracking-tight my-4 mx-0">
                {body}
            </p>
        </div>
    );
}

export default ProviderBenefitTile