import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetails = () => {
    const { id } = useParams(); 

    const data = useLoaderData();

    const [donation, setDonation] = useState(null);

    useEffect(() => {
        const singleDonation = data.find((d) => d.id === parseInt(id));
        setDonation(singleDonation);
    }, [data, id]);

    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        additionalNotes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon", {
            position: "top-center",
            autoClose: 3000, 
            hideProgressBar: false,
        });
        setFormData({
            quantity: "",
            itemType: "",
            pickupLocation: "",
            additionalNotes: "",
        });
        
    };

    if (!donation) {
        return <div>Loading or Campaign not found...</div>;
    }

    return (
        <div className="p-8">
            {/* Donation Campaign CardDetails */}
            <div className="max-w-4xl mx-auto bg-base-100 shadow-xl border p-3 rounded-xl">
                <figure className="h-96">
                    <img
                        src={donation.image}
                        alt={donation.title}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{donation.title}</h2>
                    <p className="text-gray-700 mt-4">{donation.description}</p>
                    <div className="mt-6">
                        <p className="text-lg font-semibold">
                            <span className="text-primary">Division:</span> {donation.division}
                        </p>
                        <p className="text-lg font-semibold">
                            <span className="text-primary">Contact Info:</span>{" "}
                            {donation.contactInfo}
                        </p>
                    </div>
                </div>
            </div>

            {/* Donation Form */}
            <div className="mt-8 max-w-4xl mx-auto border p-5 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Donate Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label htmlFor="quantity" className="label">
                            <span className="label-text">Quantity of Items</span>
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="e.g., 2 jackets"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="itemType" className="label">
                            <span className="label-text">Item Type</span>
                        </label>
                        <input
                            type="text"
                            id="itemType"
                            name="itemType"
                            value={formData.itemType}
                            onChange={handleChange}
                            placeholder="e.g., blanket, jacket"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="pickupLocation" className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="additionalNotes" className="label">
                            <span className="label-text">Additional Notes (Optional)</span>
                        </label>
                        <textarea
                            id="additionalNotes"
                            name="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={handleChange}
                            placeholder="Any extra information?"
                            className="textarea textarea-bordered"
                        />
                    </div>

                    <button type="submit" className="btn bg-[#b183ea] w-full">
                        Submit Donation
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DonationDetails;
