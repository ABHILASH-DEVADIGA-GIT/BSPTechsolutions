import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

const PRODUCT_OPTIONS = [
  "NirmanBook",
  "QuickClinic",
  "SmartLekka",
  "VibeBus",
  "BSP Yatra",
  "Other",
];

interface Props {
  trigger?: React.ReactNode;
  defaultProduct?: string;
}

export function WhatsAppDialog({ trigger, defaultProduct }: Props) {
  const [open, setOpen] = useState(false);

  const go = (product?: string) => {
    const msg = product
      ? `Hi BSP Tech Solutions, I would like to know more about ${product}.`
      : "Hi BSP Tech Solutions, I would like to connect and discuss about your services.";
    window.open(waLink(msg), "_blank", "noopener");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="default" className="gap-2">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Chat on WhatsApp</DialogTitle>
          <DialogDescription>
            Pick a product to start the conversation, or skip to chat about our services.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-2 py-2">
          {PRODUCT_OPTIONS.map((p) => (
            <Button
              key={p}
              variant="outline"
              className="justify-start"
              onClick={() => go(p)}
            >
              {p}
            </Button>
          ))}
        </div>
        <Button variant="ghost" onClick={() => go(defaultProduct)}>
          Skip — just chat
        </Button>
      </DialogContent>
    </Dialog>
  );
}
