'use client'
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.test.name);
	return <div>Hi there {counter} </div>;
}
