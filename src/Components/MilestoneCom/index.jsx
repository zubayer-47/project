import React from "react";
import MilestoneCom from "./MilestoneCom";
import Boxsec from '../Boxsec/Boxsec'

const mileStones = [
	{
		text: 1,
		title: "First Milestone",
		desc:
			"মডার্ন ওয়েবসাইট ডিজাইন করার জন্য নিজেকে একজন দক্ষ ওয়েব ডিজাইনার হিসেবে গড়ে তোলা",
		bg: "#EF5350",
	},
	{
		text: 2,
		title: "Second Milestone",
		desc:
			"ডাইনামিক ওয়েবসাইট ডিজাইনের জন্য জাভাস্ক্রিপ্ট প্রোগ্রামিং ল্যাংগুয়েজটি আয়ত্ত করা",
		bg: "#FECA57",
	},
	{
		text: 3,
		title: "Third Milestone",
		desc:
			"নোডজেস এবং এক্সপ্রেসের মাধ্যমে ডাইনামিক ওয়েবসাইট এবং এপিআই তৈরি করতে শেখা",
		bg: "#90CAF9",
	},
	{
		text: 4,
		title: "Fourth Milestone",
		desc:
			"ফ্রন্টেন্ডে রিয়্যাক্ট শেখার মাধ্যমে ফ্রন্টেন্ড ব্যাকেন্ড সহ ফুলস্ট্যাক ওয়েব অ্যাপলিকেশন তৈরি করা",
		bg: "#558B2F",
	},
];

const BoxsecData = [
	{
		id: "1",
		title: "Fixed Target",
		desc:
			"আমরা আপনাদের জন্য এক বছরের গোল সেট করে দিয়েছি এবং আপনাদের এক বছরের জন্য টার্গেট ফিক্সড",
	},
	{
		id: "1",
		title: "Fixed Target",
		desc:
			"আমরা আপনাদের জন্য এক বছরের গোল সেট করে দিয়েছি এবং আপনাদের এক বছরের জন্য টার্গেট ফিক্সড",
	},
];

const MilestoneComponent = () => (
	<div className="container text-center" style={{
		display: "flex",
		justifyContent: "space-between",
		flexWrap: 'wrap',
	}}>
		{mileStones.map(({ text, title, desc, bg }) => (
			<MilestoneCom key={text} text={text} title={title} desc={desc} bg={bg} />
		))}

		{BoxsecData.map(({title, desc}) => <Boxsec title={title} desc={desc} />)}
	</div>
);

export default MilestoneComponent;
