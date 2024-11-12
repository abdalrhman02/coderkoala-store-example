import React, { useState } from "react";
import { db, storage } from "../firebaseconfig"; // Make sure storage is correctly imported
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Admin() {
    const [prName, setPrName] = useState("");
    const [prDesc, setPrDesc] = useState("");
    const [prPrice, setPrPrice] = useState(0);
    const [targetOptions, setTargetOptions] = useState([]);
    const [mediaFiles, setMediaFiles] = useState([null, null, null]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if at least one file is uploaded
        if (mediaFiles.every(file => file === null)) {
            alert("Please upload at least one image or video.");
            return;
        }

        try {
            // Upload each media file to Firebase Storage and get URLs
            const mediaUrls = await Promise.all(
                mediaFiles
                    .filter(file => file) // Filter out nulls
                    .map(async (file, index) => {
                        const fileRef = ref(storage, `products/${prName}_${Date.now()}_${index}`);
                        await uploadBytes(fileRef, file);
                        return await getDownloadURL(fileRef);
                    })
            );

            // Add product with media URLs to Firestore
            const productsRef = collection(db, "products");
            await addDoc(productsRef, {
                prName,
                prDesc,
                prPrice: parseInt(prPrice),
                targetOptions,
                mediaUrls
            });

            console.log("Product Added!");
            setPrName('');
            setPrDesc('');
            setPrPrice('');
            setTargetOptions([]);
            setMediaFiles([null, null, null]); // Reset files
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const handleFileChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const newMediaFiles = [...mediaFiles];
            newMediaFiles[index] = file;
            setMediaFiles(newMediaFiles);
        }
    };

    return (
        <div className="admin">
            <header>
                <img src={require('../Images/logo.png')} alt="Logo" />
                <p>الصفحة الخاصة بالمسؤول عن المتجر</p>
            </header>

            <div className="container">
                <div className="admin-sidebar">
                    <ul>
                        <li>
                            <i className="fa-solid fa-boxes-stacked"></i>
                            <p>قائمة المنتجات</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-desktop"></i>
                            <p>عن الموقع</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-comment-dots"></i>
                            <p>تعليقات الزبائن</p>
                        </li>
                    </ul>
                </div>

                <div className="products">
                    <div className="add-product">
                        <h1>اضف منتج جديد</h1>
                        <div className="product-form">
                            <form onSubmit={handleSubmit}>
                                <div className="name-inp">
                                    <div className="inp">
                                        <label>اسم المنتج</label>
                                        <input type="text" required
                                            value={prName}
                                            onChange={(e) => setPrName(e.target.value)} />
                                    </div>
                                </div>

                                <div className="price-inp">
                                    <div className="inp">
                                        <label>السعر</label>
                                        <input type="number" required
                                            value={prPrice}
                                            onChange={(e) => setPrPrice(e.target.value)} />
                                    </div>
                                </div>

                                <div className="description-inp">
                                    <div className="inp">
                                        <label>الوصف</label>
                                        <textarea required
                                            value={prDesc}
                                            onChange={(e) => setPrDesc(e.target.value)} />
                                    </div>
                                </div>

                                <div className="target">
                                    <h4>موجه ل:</h4>
                                    <div className="options">
                                        <div className="opt">
                                            <input type="checkbox" value="اطفال"
                                                onChange={(e) => {
                                                    const { value, checked } = e.target;
                                                    setTargetOptions(prev => checked ? [...prev, value] : prev.filter(opt => opt !== value));
                                                }}
                                                checked={targetOptions.includes("اطفال")}
                                            />
                                            <label>اطفال</label>
                                        </div>
                                        <div className="opt">
                                            <input type="checkbox" value="النساء"
                                                onChange={(e) => {
                                                    const { value, checked } = e.target;
                                                    setTargetOptions(prev => checked ? [...prev, value] : prev.filter(opt => opt !== value));
                                                }}
                                                checked={targetOptions.includes("النساء")}
                                            />
                                            <label>النساء</label>
                                        </div>
                                        <div className="opt">
                                            <input type="checkbox" value="الرجال"
                                                onChange={(e) => {
                                                    const { value, checked } = e.target;
                                                    setTargetOptions(prev => checked ? [...prev, value] : prev.filter(opt => opt !== value));
                                                }}
                                                checked={targetOptions.includes("الرجال")}
                                            />
                                            <label>الرجال</label>
                                        </div>
                                        <div className="opt">
                                            <input type="checkbox" value="للجميع"
                                                onChange={(e) => {
                                                    const { value, checked } = e.target;
                                                    setTargetOptions(prev => checked ? [...prev, value] : prev.filter(opt => opt !== value));
                                                }}
                                                checked={targetOptions.includes("للجميع")}
                                            />
                                            <label>للجميع</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="images-inp">
                                    <h4>الصور والفيديوهات</h4>
                                    <div className="add-imgs">
                                        {[0, 1, 2].map((index) => (
                                            <label key={index} htmlFor={`input-file-${index}`} className="drop-area">
                                                <input
                                                    type="file"
                                                    accept="image/*,video/*"
                                                    hidden
                                                    id={`input-file-${index}`}
                                                    onChange={(event) => handleFileChange(event, index)}
                                                />
                                                <div className="img-view"
                                                    style={{
                                                        backgroundImage: mediaFiles[index] && mediaFiles[index].type.startsWith("image") ? `url(${URL.createObjectURL(mediaFiles[index])})` : 'none',
                                                    }}
                                                >
                                                    {!mediaFiles[index] && (
                                                        <img src={require('../Images/Icons/plus.png')}
                                                            className="plus-icon"
                                                            alt="Add"
                                                        />
                                                    )}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="add-btn">
                                    <input type="submit" value='اضف المنتج' className="btn" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
