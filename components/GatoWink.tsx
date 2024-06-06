"use client";
import Rive, { useRive } from "@rive-app/react-canvas";

export default function GatoWink() {
  return <Rive src="/gato_wink.riv" stateMachines="wink" />;
}
