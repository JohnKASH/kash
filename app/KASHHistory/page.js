"use client";
import { useState } from 'react';
import Image from "next/image";
import DummyImage from '@assets/KASHHistoryImages/DummyImage.jpg';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState([false, false]);

  const toggleCollapse = (index) => {
    setIsCollapsed((prev) => {
      const newCollapsedState = [...prev];
      newCollapsedState[index] = !newCollapsedState[index];
      return newCollapsedState;
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <section className="bg-white py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">KASH History</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">
            Explore the milestones of the Korean American Society of Houston over the years.
          </p>
        </div>
        
        <div className="relative border-l border-gray-200 dark:border-gray-700 mx-auto max-w-lg">
          <div className="mb-10 ml-6 text-center">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-black">Founding of KASH - 2000</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2000</time>
            <button 
              onClick={() => toggleCollapse(0)}
              className="text-blue-600 hover:underline mb-4"
            >
              {isCollapsed[1] ? 'Show Details' : 'Hide Details'}
            </button>
            {!isCollapsed[0] && (
              <div className="collapsible-content">
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  KASH was founded with the mission to bring together the Korean American community in Houston.
                </p>
                <Image 
                  src={DummyImage} 
                  alt="KASH Founding" 
                  className="rounded-lg shadow-md mx-auto"
                  width={200} // Set a specific width
                  height={150} // Set a specific height
                />
              </div>
            )}
          </div>

          <div className="mb-10 ml-6 text-center">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-black">First Annual Gala - 2005</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2005</time>
            <button 
              onClick={() => toggleCollapse(1)}
              className="text-blue-600 hover:underline mb-4"
            >
              {isCollapsed[1] ? 'Show Details' : 'Hide Details'}
            </button>
            {!isCollapsed[1] && (
              <div className="collapsible-content">
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  The first meeting was held, celebrating the achievements and future goals of KASH.
                </p>
                <Image 
                  src={DummyImage} 
                  alt="Annual Gala" 
                  className="rounded-lg shadow-md mx-auto"
                  width={200}
                  height={150}
                />
              </div>
            )}
          </div>
          
          <div className="mb-10 ml-6 text-center">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-black">The Korean Festival - 2020</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2020</time>
            <button 
              onClick={() => toggleCollapse(1)}
              className="text-blue-600 hover:underline mb-4"
            >
              {isCollapsed[1] ? 'Show Details' : 'Hide Details'}
            </button>
            {!isCollapsed[1] && (
              <div className="collapsible-content">
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  The Korean Festival was created to celebrate Korean Culture in Houston.
                </p>
                <Image 
                  src={DummyImage} 
                  alt="Korean Festival" 
                  className="rounded-lg shadow-md mx-auto"
                  width={200}
                  height={150}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
