import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection = ({ children }: PasswordProtectionProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [hasPermission, setHasPermission] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const { toast } = useToast();

  const CORRECT_PASSWORD = "2210station";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!hasPermission) {
      toast({
        title: "Permission Required",
        description: "Please confirm you have permission from Maharani (T) 👑",
        variant: "destructive",
      });
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Welcome! 💕",
        description: "Access granted to our special moments",
      });
    } else {
      toast({
        title: "Incorrect Password",
        description: "Please try again",
        variant: "destructive",
      });
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.div
          animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-pink-100"
        >
          {/* Lock Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
              <Lock className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-display font-bold text-center mb-2 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Private Moments
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Enter password to view our memories
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="pr-10 border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Permission Checkbox */}
            <div className="flex items-start space-x-3 p-4 bg-pink-50 rounded-xl border border-pink-200">
              <Checkbox
                id="permission"
                checked={hasPermission}
                onCheckedChange={(checked) => setHasPermission(checked as boolean)}
                className="mt-0.5"
              />
              <Label
                htmlFor="permission"
                className="text-sm leading-relaxed cursor-pointer select-none"
              >
                Maharani (T) theke permission niye kebol matro probesh korun 👑
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Unlock Memories 💕
            </Button>
          </form>

          {/* Footer Note */}
          <p className="text-xs text-center text-muted-foreground mt-6">
            This page is password protected. Refresh will lock it again.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PasswordProtection;
