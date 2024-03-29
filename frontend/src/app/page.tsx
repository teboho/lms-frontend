"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Layout, Flex, Button } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Header, Content,  } from "antd/lib/layout/layout";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider/context";
import { redirect } from "next/navigation";

export default function Welcome() {
  // check if the user is logged in and redirect to home if so
  const {isLoggedIn} = useContext(AuthContext);

  if (isLoggedIn()) {
    redirect("/Home");
  }
  
  return (
    <main className={styles.main}>
          <Flex align="center">
              <Image src={"/assets/images/book.gif"} alt="book" width={350} height={350} />
              <Flex align="center" vertical justify="center" gap={100}>
                <div>
                  <Image src={"/assets/images/LMS-logo1.svg"} alt="snow time" width={350} height={350} />
                  <p style={{textAlign: "center"}}>Manage your library the modern way</p>
                </div>
                <Flex gap={50}>
                  <div>
                    <Link href={"/Login"}><Button>Login</Button></Link>
                  </div>
                  <div>
                    <Link href={"/Register"}><Button>Register</Button></Link>
                  </div>
                </Flex>
              </Flex>
          </Flex>
    </main>
  );
}
