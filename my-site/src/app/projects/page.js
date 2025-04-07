"use client";
import React from "react";
import { useEffect,useState } from "react";
import '../globals.css';
import { motion } from "framer-motion";
import Projects from "@/_components/projects";


const  ProjectsPage= () => {
    return (
      <motion.div initial={{ opacity: 0 }} transition= { {duration: 1} } animate={{ opacity: 1 } } >
        <Projects/>
        </motion.div>
      
    );
};

export default ProjectsPage;