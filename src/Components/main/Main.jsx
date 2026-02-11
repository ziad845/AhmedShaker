import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  return (
    <>
      <h1 className="header">My Projects</h1>

      <main className="flex">
        <section className="flex right-section">
          <AnimatePresence>
            {myProjects.map((item) => (
              <motion.article
                layout
                initial={{ scale: 0.4 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <a
                  href={item.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img width={266} src={item.imgPath} alt={item.projectTitle} />
                </a>

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.description}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="icon-github"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </section>
      </main>
    </>
  );
}
