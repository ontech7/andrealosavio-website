import type {
  AnimationConfig,
  AnimationDirection,
  AnimationEventCallback,
  AnimationItem,
  AnimationSegment,
  RendererType,
} from "lottie-web";
import type { RefObject } from "react";
import Lottie from "react-lottie-player";

type LottieProps = React.PropsWithoutRef<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> &
  Partial<
    Pick<
      AnimationConfig<RendererType>,
      "loop" | "renderer" | "rendererSettings" | "audioFactory"
    >
  > & {
    play?: boolean;
    goTo?: number;
    speed?: number;
    direction?: AnimationDirection;
    segments?: AnimationSegment | AnimationSegment[];
    useSubframes?: boolean;

    onComplete?: AnimationEventCallback;
    onLoopComplete?: AnimationEventCallback;
    onEnterFrame?: AnimationEventCallback;
    onSegmentStart?: AnimationEventCallback;

    ref?: React.Ref<AnimationItem | undefined>;
  } & ({ path?: string } | { animationData?: object });

type DynamicLottieProps = LottieProps & {
  forwardedRef?: RefObject<AnimationItem>;
};

export default function DynamicLottie({
  forwardedRef,
  ...props
}: DynamicLottieProps) {
  return <Lottie {...props} ref={forwardedRef} />;
}
