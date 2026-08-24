"use client";

import React, { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import useInputeChange from "@/hooks/quries/useInputeChange";
import { LoginInput } from "@/interface/auth.interface";

export default function LoginForm() {
  const { onChange, state, setState } = useInputeChange<LoginInput>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form data:", state);
    setState({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>

        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={state.name}
          onChange={onChange}
          required
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={state.email}
          onChange={onChange}
          required
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>

        <Textarea
          id="message"
          name="message"
          placeholder="Tell us what you need..."
          value={state.message}
          onChange={onChange}
          rows={15}
          //   cols={10}
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
