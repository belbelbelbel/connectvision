import Image from 'next/image';
import React from 'react'
import Start from './Start';
import Footer from './Footer';

export default function RetinalExams() {
    const cards = [
        {
            title: "Normal retina",
            img: "/Retinal6.png",
            text: "The Retinal Exam is fast, painless and comfortable. Nothing touches your eye at any time. It is suitable for the whole family. To have the exam, you simply look into the device one eye at a time (like looking through a keyhole) and you will see a comfortable flash of light to let you know the image of your retina has been taken.",
        },
        {
            title: "Diabetes",
            img: "/Retinal7.png",
            text: "Diabetes is a disease in which your blood glucose or sugar levels are too high. Glucose comes from the foods you eat. Insulin is a hormone that helps the glucose get into your cells to give them energy. Untreated diabetes can also lead to heart disease, stroke, and even the need to remove a limb. Pregnant women can also get diabetes, called gestational diabetes.",
        },
        {
            title: "Age related macular degeneration (AMD)",
            img: "/retinal8.png",
            text: "Age-Related Macular Degeneration (AMD) is a leading cause of vision loss in Americans 60 years and older. It is a disease that destroys your sharp, central vision. You need central vision to see objects clearly and to do tasks such as reading and driving. Regular comprehensive eye exams can detect macular degeneration before the disease causes vision loss. Treatment can slow vision loss, but does not restore vision.",
        },
        {
            title: "Glaucoma",
            img: "/retinal9.png",
            text: "Glaucoma damages the eye's optic nerve. It is a leading cause of blindness in the United States. It usually happens when the fluid pressure inside the eyes slowly rises, damaging the optic nerve. Often there are no symptoms at first, but a comprehensive eye exam can detect it. Individuals 60 years and older, African Americans, and those with family histories of glaucoma have a greater risk of developing the disease and should get eye exams at least every two years. Early treatment can help protect your eyes against vision loss. Treatments usually include prescription eyedrops and/or surgery.",
        },
    ];
    return (
        <div className='w-full'>
            <div className="md:max-w-6xl w-[80%] mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Retinal exam</h1>
                <p className="text-gray-600 mb-10">
                    The Retinal Exam is fast, painless and comfortable. Nothing touches
                    your eye at any time. It is suitable for the whole family. To have the
                    exam, you simply look into the device one eye at a time (like looking
                    through a keyhole) and you will see a comfortable flash of light to let
                    you know the image of your retina has been taken
                </p>

                {/* Top Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/Routineeyeexamimage4.png"
                            alt="Retinal device"
                            width={500}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/Routineeyeexamimage5.png"
                            alt="Eye scan"
                            width={500}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col"
                        >
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-contain"
                            />
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                                <p className="text-gray-600 text-sm">{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Start />
            <Footer />
        </div>
    )
}
